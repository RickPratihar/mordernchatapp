import React from "react";
import { FormProvider as Form } from "react-hook-form";

const FromProvider = ({children, onSubmit, methods}) => {
    return(
        <Form {...methods}>
          <from onSubmit={onSubmit}>{children}</from>
        </Form>
    )
}

export default FromProvider