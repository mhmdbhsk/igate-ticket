import { CopyButton as MantineCopyButton, Tooltip, Code } from '@mantine/core';

function CopyButton({ value }: { value: string }) {
  return (
    <MantineCopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? 'Disalin' : 'Salin'}
          withArrow
          position='right'
          sx={{ fontSize: 12 }}
        >
          <Code color={copied ? 'teal' : 'violet'} onClick={copy}>
            {value}
          </Code>
        </Tooltip>
      )}
    </MantineCopyButton>
  );
}

export default CopyButton;
