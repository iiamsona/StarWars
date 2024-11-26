import type { FieldPath, FieldValues } from 'react-hook-form';

export interface FormItemContextValue {
  id: string;
}

export interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
}
