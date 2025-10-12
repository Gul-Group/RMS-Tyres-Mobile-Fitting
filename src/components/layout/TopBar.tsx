import { Box, Flex, Button, Heading, Container } from "@radix-ui/themes";
import Link from "next/link";

interface TopBarProps {
  title: string;
  actionLabel: string;
  actionHref: string;
}

export default function TopBar({
  title,
  actionLabel,
  actionHref
}: TopBarProps) {
  return (
    <Box
      asChild
      position="sticky"
      top="0"
      style={{
        zIndex: 50,
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--gray-6)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container p="4">
        <Flex
          direction={{ initial: 'column', sm: 'row' }}
          align={{ initial: 'center', sm: 'center' }}
          justify="between"
          gap="4"
        >
          {/* Left: Breadcrumbs + Title */}
          <Flex direction="column" gap="2">
            <Heading size="4" weight="bold" className="font-poppins">
              {title}
            </Heading>
          </Flex>

          {/* Right: Action Button */}
          <Button asChild size="2" className="font-poppins">
            <Link href={actionHref} target="_blank">
              {actionLabel}
            </Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
