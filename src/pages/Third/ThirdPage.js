import React from "react";
import { LinkButton } from "components/LinkButton";
import { sleep } from "Utils";

export default function ThirdPage(props) {
  console.log("ThirdPage::render");
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow mt-4">
        <div className="pt-1">
          <h4 className="text-xl text-gray-900 leading-tight mb-2">
            Third page
          </h4>
          <p className="text-base text-gray-600 leading-normal mb-2">
            Date: {props.date.toString()}
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2"></p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            Cupcake ipsum dolor sit amet. Chocolate cake pudding candy
            marshmallow chocolate gummies macaroon muffin. Wafer cupcake pie.
            Wafer cookie danish pudding candy canes. Tart cotton candy
            gingerbread pie. Biscuit macaroon muffin liquorice liquorice.
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            Brownie pudding jelly-o cheesecake dessert biscuit soufflé chocolate
            bar lemon drops. Liquorice pastry jujubes lollipop wafer pudding
            marzipan. Candy cookie soufflé sweet muffin donut jelly. Lollipop
            fruitcake pudding toffee topping tootsie roll cake. Ice cream pastry
            marzipan dessert. Dessert gummi bears cheesecake liquorice soufflé
            chocolate bar. Lemon drops pastry cotton candy.
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            <LinkButton to={props.links.prev}>Back</LinkButton>
            <LinkButton to={props.links.next}>Next</LinkButton>
          </p>
        </div>
      </div>
    </div>
  );
}

ThirdPage.getInitialProps = async function getInitialProps() {
  await sleep(500);
  return {
    date: new Date()
  };
};
