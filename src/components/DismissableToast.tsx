import { ActionIcon, Box, Button } from '@mantine/core';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import { IconX } from '@tabler/icons';

export default function DismissableToast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: '8px',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 8,
                  fontSize: 14,
                }}
              >
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <ActionIcon onClick={() => toast.dismiss(t.id)}>
                    <IconX size={16} color='#000' />
                  </ActionIcon>
                )}
              </Box>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}
