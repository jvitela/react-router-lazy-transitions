import React from "react";
import { Page } from "components/Page";
import { LinkButton } from "components/LinkButton";

export function FourthPage(props) {
  console.log("FourthPage::render");
  return (
    <Page>
      <h4 className="text-xl text-gray-900 leading-tight mb-2">Fourth page</h4>
      <p className="text-base text-gray-600 leading-normal mb-2">
        Cupcake ipsum dolor sit amet. Chocolate cake pudding candy marshmallow
        chocolate gummies macaroon muffin. Wafer cupcake pie. Wafer cookie
        danish pudding candy canes. Tart cotton candy gingerbread pie. Biscuit
        macaroon muffin liquorice liquorice.
      </p>
      <p className="text-base text-gray-600 leading-normal mb-2">
        <LinkButton to={props.links.prev}>Prev</LinkButton>
        <LinkButton to={props.links.next}>Next</LinkButton>
      </p>
    </Page>
  );
}
