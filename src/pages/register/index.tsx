import FileUpload from '@/components/FileUpload';
import { useWindowSize } from '@/hooks/useWindowSize';
import TicketService from '@/services/ticket';
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Group,
  Image,
  List,
  Modal,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface RegisterProps {}

export default function Register({}: RegisterProps) {
  const { isSmall } = useWindowSize();
  const theme = useMantineTheme();
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentProofUrl, setPaymentProofUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      year: '',
      termsOfService: false,
    },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Nama terlalu pendek' : null,
      email: /^\S+@\S+$/.test(values.email)
        ? null
        : 'Masukkan email yang valid',
      year:
        values.year.length < 1 ? 'Pilih tahun angkatan terlebih dahulu' : null,
      termsOfService: values.termsOfService === false,
    }),
  });

  const uploadImage = (file: File) => {
    setIsLoading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'payment_proof_i_gate');
    data.append('cloud_name', 'mhmdbhsk');
    fetch('https://api.cloudinary.com/v1_1/mhmdbhsk/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPaymentProofUrl(data.url);
        setIsLoading(false);
      })
      .catch(() => toast.error('Upload File Gagal'));
  };

  const handleSubmit = async (values: any) => {
    if (paymentProofUrl === null) {
      setError('Mohon unggah bukti pembayaran');
      return;
    }

    const data = {
      name: values.name,
      email: values.email,
      year: values.year.toString(),
      paymentProof: paymentProofUrl as string,
    };

    if (paymentProofUrl !== null) {
      try {
        const response = await TicketService.createTicket(data);

        if (response.status === 200) {
          router.push('/register/success');
          toast.success('Pendaftaran berhasil');
          setPaymentProofUrl(null);
        }
      } catch (error) {
        setPaymentProofUrl(null);
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        gap: 16,
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={<Text weight='bold'>Cara Pembayaran</Text>}
        centered
        overlayColor={theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        radius='lg'
      >
        <Text size={14} sx={{ marginBottom: 4 }}>
          Kirim pembayaran ke nomor/rekening yang tertera di bawah ini
        </Text>
        <List size='sm'>
          <List.Item>
            <Text> Bank Mandiri 1239412323 - a.n. Test</Text>
          </List.Item>
          <List.Item>
            <Text>ShopeePay/Dana/Gopay 0892313124123 - a.n. Test</Text>
          </List.Item>
        </List>
      </Modal>

      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        style={{
          flexDirection: 'column',
          display: 'flex',
          gap: 16,
        }}
      >
        <TextInput
          withAsterisk
          required
          label='Nama Lengkap'
          placeholder='Masukkan nama lengkap kamu'
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          required
          label='Email'
          placeholder='Masukkan email kamu'
          {...form.getInputProps('email')}
        />
        <Select
          required
          label='Angkatan'
          placeholder='Pilih tahun angkatan kamu'
          data={[
            { value: 2019, label: '2019' },
            { value: 2020, label: '2020' },
            { value: 2021, label: '2021' },
            { value: 2022, label: '2022' },
            { value: 'Lainnya', label: 'Lainnya' },
          ]}
          {...form.getInputProps('year')}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: isSmall ? 'start' : 'center',
              gap: isSmall ? 8 : 0,
              justifyContent: 'space-between',
              flexDirection: isSmall ? 'column' : 'row',
            }}
          >
            <Text size={14} weight={500}>
              Upload bukti pembayaran
            </Text>
            <Button
              fullWidth={isSmall}
              variant='light'
              radius='xl'
              sx={{ fontSize: 12 }}
              onClick={() => setModalOpened(true)}
            >
              Cara Pembayaran
            </Button>
          </Box>

          {!isLoading && paymentProofUrl ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <Image
                src={paymentProofUrl as string}
                alt='Payment proof'
                sx={{ maxWidth: 200 }}
              />
              <Button
                fullWidth={isSmall}
                color='red'
                variant='light'
                radius='xl'
                sx={{ fontSize: 12 }}
                onClick={() => setPaymentProofUrl(null)}
              >
                Hapus
              </Button>
            </Box>
          ) : (
            <FileUpload
              loading={isLoading}
              onDrop={(files: FileWithPath[]) => {
                setError('');
                uploadImage(files[0]);
              }}
              onReject={() => setError('File tidak didukung')}
            />
          )}
          {error && (
            <Text size={12} color='red'>
              {error}
            </Text>
          )}
        </Box>

        <Checkbox
          required
          mt='md'
          label={`Saya setuju dengan syarat dan ketentuan yang berlaku`}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position='right' mt='md'>
          <Button
            type='submit'
            disabled={!form.isValid() || paymentProofUrl === null}
          >
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
