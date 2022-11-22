import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

type FileUploadProps = Partial<DropzoneProps> & {};

export default function FileUpload(props: FileUploadProps) {
  const theme = useMantineTheme();
  const { onDrop, onReject } = props;

  return (
    <Dropzone
      color='violet'
      onDrop={onDrop as any}
      onReject={onReject}
      maxSize={1 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      multiple={false}
      {...props}
    >
      <Group
        position='center'
        spacing='sm'
        style={{ minHeight: 100, pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={24} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size='sm' inline>
            Seret gambar ke sini atau klik untuk memilih gambar
          </Text>
          <Text size='xs' color='dimmed' inline mt={7}>
            Hanya satu file, format .png/.jpg/.jpeg, ukuran tidak lebih dari 1mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
