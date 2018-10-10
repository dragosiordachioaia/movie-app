import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// import React from 'react';
// import renderer from 'react-test-renderer';
//
// import { CompactInsuranceOrder } from 'new_checkout/components/bundle_parts/compact_insurance_order';
//
// let component;
//
// describe('CompactInsuranceOrder component', () => {
//   it('renders correctly', () => {
//     const props = {
//       order: {
//         event: {
//           content: {
//             full_terms: {
//               value_html: 'terms here',
//             },
//           },
//         },
//       },
//     };
//     const component = renderer.create(<CompactInsuranceOrder {...props} />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it('calls analytics on T & C click', () => {
//     const props = {
//       order: {
//         event: {
//           content: {
//             full_terms: {
//               value_html: 'terms here',
//             },
//           },
//         },
//       },
//       sendAnalyticsEvent: jest.fn(),
//     };
//     const component = renderer.create(<CompactInsuranceOrder {...props} />);
//     const instance = component.getInstance();
//     instance.onInsuranceTAndCClick();
//     expect(props.sendAnalyticsEvent).toBeCalled();
//   });
// });
