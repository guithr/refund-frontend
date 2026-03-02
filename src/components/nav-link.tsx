import { NavLink as RouterNavLink, type NavLinkProps } from "react-router";
import { tv } from "tailwind-variants";
import { Text } from "./text";

const navLinkVariants = tv({
  base: "transition hover:text-green-100",
  variants: {
    state: {
      active: "text-green-100",
    },
  },
});

interface Props extends Omit<NavLinkProps, "className"> {
  className?: string;
  children: React.ReactNode;
}

export function NavLink({ children, className, ...props }: Props) {
  return (
    <RouterNavLink {...props} className="block">
      {({ isActive }) => (
        <Text
          variant="nav-link"
          className={navLinkVariants({
            state: isActive ? "active" : undefined,
            className,
          })}
        >
          {children}
        </Text>
      )}
    </RouterNavLink>
  );
}
