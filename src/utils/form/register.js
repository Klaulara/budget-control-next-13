export const getNameRegister = ({ register = {} }) => ({
  ...register("name", {
    required: "name_required",
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/i,
      message: "invalid_name_format",
    },
    minLength: {
      value: 1,
      message: "name_min_length",
    },
    maxLength: {
      value: 40,
      message: "name_max_length",
    },
  }),
});

export const getEmailRegister = ({ register = {}, name = "email" }) => ({
  ...register(name, {
    required: "email_required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "invalid_email_format",
    },
  }),
});

export const getPasswordRegister = ({
  register = {},
  name = "password",
  isRequired = true,
}) => ({
  ...register(name, {
    required: isRequired ? "password_required" : false,
    minLength: {
      value: 8,
      message: "password_min_length",
    },
    maxLength: {
      value: 100,
      message: "password_max_length",
    },
    validate: {
      hasLowerCase: (val) =>
        (val === "" && !isRequired) ||
        /[a-z]+/.test(val) ||
        "password_have_lowercase",
      hasUppercase: (val) =>
        (val === "" && !isRequired) ||
        /[A-Z]+/.test(val) ||
        "password_have_uppercase",
      hasNumber: (val) =>
        (val === "" && !isRequired) ||
        /(?=.*[0-9])/.test(val) ||
        "password_have_number",
      hasSymbol: (val) =>
        (val === "" && !isRequired) ||
        /[$&*@¡!?¿=#%()|'<>;:.,^~{}+_-]+/.test(val) ||
        "password_have_special_character",
    },
  }),
});

export const getNewPasswordRegister = ({
  register = {},
  password = "",
  name = "newPassword",
  isRequired = true,
}) => ({
  ...register(name, {
    required: isRequired ? "password_required" : false,
    minLength: {
      value: 8,
      message: "password_min_length",
    },
    maxLength: {
      value: 100,
      message: "password_max_length",
    },
    validate: {
      hasLowerCase: (val) =>
        (val === "" && !isRequired) ||
        /[a-z]+/.test(val) ||
        "password_have_lowercase",
      hasUppercase: (val) =>
        (val === "" && !isRequired) ||
        /[A-Z]+/.test(val) ||
        "password_have_uppercase",
      hasNumber: (val) =>
        (val === "" && !isRequired) ||
        /(?=.*[0-9])/.test(val) ||
        "password_have_number",
      hasSymbol: (val) =>
        (val === "" && !isRequired) ||
        /[$&*@¡!?¿=#%()|'<>;:.,^~{}+_-]+/.test(val) ||
        "password_have_special_character",
      confirmPassword: (val) =>
        val === password || "Your passwords do not match",
    },
  }),
});

export const getUrlRegister = ({ register = {}, name = "url" }) => ({
  ...register(name, {
    required: "url_required",
    pattern: {
      value:
        // eslint-disable-next-line no-useless-escape
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)/gm,
      message: "invalid_url_format",
    },
  }),
});

export const getValueRegister = ({ register = {}, name = "value" }) => ({
    ...register(name, {
        required: "value_required",
        pattern: {
            value: /^[0-9]*$/i,
            message: "invalid_value_format",
        },
        minLength: {
            value: 1,
            message: "value_min_length",
        },
        maxLength: {
            value: 40,
            message: "value_max_length",
        },
    }),
});