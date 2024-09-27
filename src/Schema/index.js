
import * as Yup from 'yup';
// Define the regular expression pattern
const textPattern = /^[a-zA-Z\s]*$/;

// Define the validation schema
export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .transform(value => {
        if (value) {
            const trimmedValue = value.trim();
            return trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1).toLowerCase();
        }
        return value;
    })
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name must be at most 25 characters')
    .matches(textPattern, 'Name can only contain letters and spaces')
    .required('Name is required'),

  category: Yup.string().required('Category is required'),

  expiry_date: Yup.date()
    .required('Expiry date is required')
    .min(new Date(), 'Expiry date must be in the future'),

  quantity: Yup.number()
    .required('Quantity is required')
    .min(1, 'Quantity must be at least 1')
    .max(99, 'Quantity must be at most 99')
    .positive('Quantity must be positive')
    .integer('Quantity must be an integer'),
});

