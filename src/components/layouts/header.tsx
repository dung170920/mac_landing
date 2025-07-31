import React from "react"
import Logo from "../ui/logo"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu"
import { Button } from "../ui/button"
import { Menu, MenuItem } from "../ui/menu"
import { Bell, Menu as MenuIcon } from "magicon"
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer"
import { navigationLinks } from "@/constants/navigation"

const Header = () => {
  return (
    <nav className="py-8 flex items-center justify-between container">
      <div className="flex items-center xl:gap-20 md:gap-10 gap-5">
        <Logo />
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                {link.submenu ? (
                  <>
                    <NavigationMenuTrigger className="font-semibold">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.items?.map((component) => (
                          <NavigationMenuLink href={component.href} key={component.title}>
                            <div className="text-base leading-none font-semibold">{component.title}</div>
                            <p className="text-gray-500 line-clamp-2 text-sm font-medium mt-2">
                              {component.description}
                            </p>
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={link.href ?? "#"}
                    className="font-semibold"
                  >
                    {link.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-2 max-lg:hidden">
        <Button href="#" variant={'outline'} color={"dark"}>Get started</Button>
        <Button icon={<Bell />} color={"dark"} />
      </div>

      <Drawer className="lg:hidden">
        <DrawerTrigger asChild>
          <Button icon={<MenuIcon />} color={"dark"} variant={"text"} />
        </DrawerTrigger>
        <DrawerContent side="right" className="px-6 py-4">
          <Menu>
            {navigationLinks.map((link) => (
              <MenuItem key={link.label} label={link.label} className="font-semibold text-sm">
                {link.submenu && link.items?.map((item) => (
                  <MenuItem
                    key={item.title}
                    label={item.title}
                    href={item.href}
                    className="font-semibold text-sm"
                  />
                ))}
              </MenuItem>
            ))}
          </Menu>
          <div className="flex items-center gap-3 mt-4">
            <Button href="#" variant={'outline'} color={"dark"} className="w-full">Get started</Button>
            <Button icon={<Bell />} color={"dark"} />
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Header
