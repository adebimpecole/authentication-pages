import React from "react";
import Select from "./Select";

export default {
    title: 'Components/Elements',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
        padding: {control: 'number'}
      },
  };

  export const Component = (props) => <Select {...props}/>