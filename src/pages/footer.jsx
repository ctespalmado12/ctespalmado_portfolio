import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";


export function MyFooter() {

  return (
    <Footer container>
      <FooterCopyright className="flowbite-footer" href="#" by="Clarisse Espalmado"  year={new Date().getFullYear()} />
      <FooterLinkGroup>
        {/* <FooterLink href="#">About</FooterLink> */}
      </FooterLinkGroup>
    </Footer>
  );
}