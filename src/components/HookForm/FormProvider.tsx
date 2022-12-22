import React, { useEffect } from 'react';
import { FormProvider as Form, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const FormProvider: React.FC<{ onSubmit: (data: any) => void; children: any; defaultValues: object; validationSchema: any }> = ({
  onSubmit,
  children,
  defaultValues,
  validationSchema,
}) => {
  const menthods = useForm({ resolver: yupResolver(validationSchema), defaultValues: defaultValues });
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = menthods;
  useEffect(() => {
    if (isSubmitSuccessful) reset(defaultValues);
  }, [isSubmitSuccessful]);

  return (
    <Form {...menthods}>
      <form action='' onSubmit={menthods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
