import FileUpload from '@/components/FileUpload';
import Jumbotron from '@/components/Jumbotron';
import { useWindowSize } from '@/hooks/useWindowSize';
import PhotoService from '@/services/photo';
import TicketService from '@/services/ticket';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Code,
  Group,
  Image,
  List,
  Modal,
  NumberInput,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import toast from 'react-hot-toast';
import CopyButton from '@/components/CopyButton';

interface RegisterProps {}

const Register: NextPageWithSeo = ({}: RegisterProps) => {
  const { isSmall } = useWindowSize();
  const theme = useMantineTheme();
  const [modalOpened, setModalOpened] = useState<
    'payment-method' | 'terms-condition' | null
  >(null);
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
      nim: '',
    },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Nama terlalu pendek' : null,
      email: /^\S+@\S+$/.test(values.email)
        ? null
        : 'Masukkan email yang valid',
      year:
        values.year.length < 1 ? 'Pilih tahun angkatan terlebih dahulu' : null,
      nim:
        values?.nim?.length < 14
          ? 'Nomor Induk Mahasiswa kurang dari 14 digit, silahkan cek kembali'
          : null,
      termsOfService: values.termsOfService === false,
    }),
  });

  const uploadImage = async (file: File) => {
    setIsLoading(true);

    const data = new FormData();
    data.append('file', file);
    data.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string
    );
    data.append(
      'cloud_name',
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string
    );

    try {
      const res = await PhotoService.uploadImage(data);
      if (res) {
        setPaymentProofUrl(res.url);
        setModalOpened(null);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error('Upload File Gagal');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    if (paymentProofUrl === null) {
      setError('Mohon unggah bukti pembayaran');
      return;
    }

    const data = {
      nim: values?.nim?.toString(),
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
          setIsLoading(false);
        }
      } catch (error) {
        setPaymentProofUrl(null);
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <Box>
      <Modal
        opened={modalOpened === 'payment-method'}
        onClose={() => setModalOpened(null)}
        title={<Text weight='bold'>Cara Pembayaran</Text>}
        centered
        overlayColor={theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        radius='lg'
      >
        <Text size={14} sx={{ marginBottom: 4 }}>
          Kirim pembayaran sebesar <Code color='violet'>Rp. 35.000</Code> ke
          nomor/rekening yang tertera di bawah ini
        </Text>

        <List size='sm'>
          <List.Item>
            <Text>
              BCA No rekening : <CopyButton value='1772177997' /> a.n Axelliano
              Rafael Situmeang
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Mandiri No rekening : <CopyButton value='1260010227527' /> a.n
              Salsabila Tuada
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Dana <CopyButton value='089648297621' /> a.n Salsabila Tuada
            </Text>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: 380,
              }}
            >
              <Image
                width='75%'
                src='/images/method-dana.jpg'
                alt='Metode Pembayaran Dana'
                styles={{
                  imageWrapper: { display: 'flex', justifyContent: 'center' },
                }}
              />
            </Box>
          </List.Item>
          <List.Item>
            <Text>
              Shopeepay <CopyButton value='089648297621' /> a.n Salsabila Tuada
            </Text>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: 380,
              }}
            >
              <Image
                width='75%'
                src='/images/method-shopeepay.jpg'
                alt='Metode Pembayaran ShopeePay'
                styles={{
                  imageWrapper: { display: 'flex', justifyContent: 'center' },
                }}
              />
            </Box>
          </List.Item>
          <List.Item>
            <Text>
              Gopay <CopyButton value='089648297621' /> a.n Salsabila Tuada
            </Text>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: 380,
              }}
            >
              <Image
                width='75%'
                src='/images/method-gopay.png'
                alt='Metode Pembayaran Gopay'
                styles={{
                  imageWrapper: { display: 'flex', justifyContent: 'center' },
                }}
              />
            </Box>
          </List.Item>
        </List>
      </Modal>

      <Modal
        opened={modalOpened === 'terms-condition'}
        onClose={() => setModalOpened(null)}
        title={<Text weight='bold'>Syarat dan Ketentuan</Text>}
        centered
        overlayColor={theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        radius='lg'
      >
        <List type='ordered' size='xs'>
          <List.Item>
            Tidak diperbolehkan membawa benda tajam dan barang-barang berbahaya
            lainnya.
          </List.Item>
          <List.Item>Tidak diperbolehkan menggunakan sandal.</List.Item>
          <List.Item>Tidak diperbolehkan membawa vape atau rokok.</List.Item>
          <List.Item>Dilarang membawa obat-obatan terlarang.</List.Item>
          <List.Item>Dilarang membawa senjata api atau petasan.</List.Item>
          <List.Item>Tidak diperbolehkan membawa minuman keras.</List.Item>
          <List.Item>Dilarang membawa alat tulis.</List.Item>
          <List.Item>Tidak diperbolehkan membawa laser pointer.</List.Item>
          <List.Item>Dilarang membawa drone.</List.Item>
          <List.Item>Dilarang membawa botol minum atau tumblr. </List.Item>
          <List.Item>Dilarang membawa noise speaker. </List.Item>
          <List.Item>Dilarang membawa hewan peliharaan. </List.Item>
        </List>
      </Modal>

      <Jumbotron>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 48,
          }}
        >
          <Box
            sx={{
              width: 'max-content',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 24,
              margin: 24,
              marginBottom: 0,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                width: '100%',
                flexDirection: 'column',
                marginBottom: 24,
              }}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  borderRadius: 16,
                  background: 'white',
                  padding: '8px 16px',
                  width: 'max-content',
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                }}
                onClick={() => router.back()}
              >
                <IconArrowLeft size={16} />
                <Text size={14} weight='bold'>
                  Kembali
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: '#fff',
                padding: 36,
                borderRadius: 16,
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <Text
                weight='bold'
                size={24}
                sx={{ fontFamily: '__Lilita_One_4c05dc' }}
              >
                Daftar
              </Text>
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
                <NumberInput
                  withAsterisk
                  required
                  label='Nomor Induk Mahasiswa ( NIM )'
                  placeholder='Masukkan NIM kamu'
                  {...form.getInputProps('nim')}
                />
                <TextInput
                  withAsterisk
                  required
                  label='Email'
                  placeholder='Masukkan email kamu'
                  styles={(theme) => ({
                    input: {
                      ':focus': {
                        input: {
                          borderColor:
                            theme.colors.violet[theme.fn.primaryShade()],
                        },
                      },
                    },
                  })}
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
                      onClick={() => setModalOpened('payment-method')}
                      color='violet'
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
                  color='violet'
                  label={
                    <Text>
                      Saya setuju dengan{' '}
                      <Anchor
                        component='button'
                        onClick={(e: any) => {
                          e.stopPropagation();
                          setModalOpened('terms-condition');
                        }}
                      >
                        syarat dan ketentuan
                      </Anchor>{' '}
                      yang berlaku
                    </Text>
                  }
                  {...form.getInputProps('termsOfService', {
                    type: 'checkbox',
                  })}
                />

                <Group position='center' mt='md'>
                  <Button
                    radius='xl'
                    variant='light'
                    type='submit'
                    disabled={!form.isValid() || paymentProofUrl === null}
                    color='violet'
                    loading={isLoading}
                  >
                    Daftar
                  </Button>
                </Group>
              </form>
            </Box>
          </Box>
        </Box>
      </Jumbotron>
    </Box>
  );
};

Register.title = 'Register';
Register.pageTitle = 'Register';

export default Register;
