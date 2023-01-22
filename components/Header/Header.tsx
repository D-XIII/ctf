import { createStyles, Header, Autocomplete, Group, Avatar } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons';
// import { MantineLogo } from '@mantine/ds';
// import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  autocompleteData: string[];
}

export function HeaderSearch({ autocompleteData }: HeaderSearchProps) {
  //   const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Avatar
            src="https://yt3.ggpht.com/ye9E95jmnUmuNQaDvTtSfyLR1rzMW8-XsdLS3lUVFg5iIMQ4tJ7m4Ysgvc0WIOjxVX4vluyxyg=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="Random unsplash image"
          />
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={autocompleteData}
          />
        </Group>
      </div>
    </Header>
  );
}
