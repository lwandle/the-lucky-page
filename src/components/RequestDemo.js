import React, { useState } from "react";

const phoneNumberRegex = new RegExp("^[+]*[0-9]*$");

/**
 * @typedef {{valid:boolean, value: string, touched:boolean | undefined, showError:boolean, hasCheckOnsubmit:boolean}} FormTypeProps
 */

/**
 * form type
 * @typedef {{firstName: FormTypeProps, email: FormTypeProps, phoneNumber: FormTypeProps, company: FormTypeProps, role:FormTypeProps}} DemoForm
 */

/**@type {DemoForm} */
const formInit = {
  firstName: {
    valid: false,
    value: undefined,
    touched: false,
    showError: false,
    hasCheckOnsubmit: false,
  },
  email: {
    valid: false,
    value: undefined,
    touched: false,
    showError: false,
    hasCheckOnsubmit: false,
  },
  phoneNumber: {
    valid: false,
    value: undefined,
    touched: false,
    showError: false,
    hasCheckOnsubmit: true,
  },
  company: {
    valid: false,
    value: undefined,
    touched: false,
    showError: false,
    hasCheckOnsubmit: false,
  },
  role: {
    valid: false,
    value: undefined,
    touched: false,
    showError: false,
    hasCheckOnsubmit: false,
  },
};
const RequestDemo = () => {
  const [form, setForm] = useState(/** @type {DemoForm?} */ (formInit));

  const [formInValid, setFormInValid] = useState(true);

  /**
   * Handles form input and sets the form state
   * @param {Event} event
   * @returns {void}
   */
  const handleForm = (event, typeCheck = false, isValid = false) => {
    const type = event.currentTarget.id;

    /** @type {FormTypeProps} */
    let inputType = {
      valid: event.currentTarget.validity.valid,
      value: event.currentTarget.value,
      touched: true,
      showError:
        (form[type]?.hasCheckOnsubmit && !isValid) ??
        (typeCheck && !event.currentTarget.validity.valid),
    };

    setForm((prevForm) => {
      prevForm[type] = { ...prevForm[type], ...inputType };
      return prevForm;
    });

    const isFormInValid = Object.keys(formInit).some((formType) => {
      console.log(form[formType].touched, form[formType].valid);
      return form[formType].touched === false || form[formType].valid === false;
    });

    setFormInValid(isFormInValid);
  };

  /**@return {void} */
  const submit = () => {
    console.log(form);
  };
  return (
    <div className="bg-lucky-blue flex flex-col h-screen items-center">
      <div className="container mx-auto flex flex-col space-y-3 relative items-center top-[10%]">
        <div className="flex flex-col space-y-3 items-center">
          <div className="text-beardTitle text-lucky-white font-poppins font-semibold">
            Request a demo
          </div>
          <p className="beardParagraph text-lucky-white md:w-[50%] font-poppins text-center">
            If you are a professional, we offer a desktop admin platform, to
            allow a better and faster management of your whole business
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col space-y-6 bg-lucky-white p-10 rounded-xl max-w-[41.375rem]">
          <div className="text-beardHeading text-lucky-black font-poppins font-semibold">
            Please fill your application
          </div>
          <form className="flex flex-col space-y-6" onSubmit={() => submit()}>
            <div className="w-full">
              <input
                id="firstName"
                type="text"
                placeholder="Your name"
                required
                maxLength={50}
                className="focus:outline-none pb-3 border-b border-[#E0E0E0] text-luck-grey w-full"
                onChange={(e) => {
                  handleForm(e);
                }}
              />
              {!form["firstName"]?.valid && form["firstName"]?.touched ? (
                <p className="text-xs text-red-700">
                  Please enter a valid response.
                </p>
              ) : null}
            </div>

            <div className="w-full">
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                maxLength={50}
                className="focus:outline-none pb-3 border-b border-[#E0E0E0] text-luck-grey w-full"
                onChange={(e) => {
                  handleForm(e);
                }}
                onBlur={(e) => {
                  handleForm(e, true);
                }}
              />
              {form["email"]?.showError ? (
                <p className="text-xs text-red-700">
                  Please enter a valid response.
                </p>
              ) : null}
            </div>

            <div className="w-full">
              <input
                id="phoneNumber"
                type="text"
                maxLength={13}
                required
                placeholder="Mobile number"
                className="focus:outline-none pb-3 border-b border-[#E0E0E0] text-luck-grey w-full"
                onChange={(e) => {
                  let isValid = phoneNumberRegex.test(e.currentTarget.value);
                  handleForm(e, false, isValid);
                }}
                onBlur={(e) => {
                  let isValid = phoneNumberRegex.test(e.currentTarget.value);
                  handleForm(e, true, isValid);
                }}
              />
              {form["phoneNumber"]?.showError ? (
                <p className="text-xs text-red-700">
                  Please enter a valid response.
                </p>
              ) : null}
            </div>

            <div className="w-full">
              <input
                id="company"
                type="text"
                required
                maxLength={50}
                placeholder="Company"
                className="focus:outline-none pb-3 border-b border-[#E0E0E0] text-luck-grey w-full"
                onChange={(e) => {
                  handleForm(e);
                }}
              />
              {!form["company"]?.valid && form["company"]?.touched ? (
                <p className="text-xs text-red-700">
                  Please enter a valid response.
                </p>
              ) : null}
            </div>

            <div className="w-full">
              <select
                id="role"
                className="focus:outline-none border-b border-[#E0E0E0] pb-3 text-luck-grey w-full"
                onChange={(e) => {
                  handleForm(e);
                }}
              >
                <option className="text-luck-grey">Role in the company</option>
                <option className="text-luck-grey">Developer</option>
                <option className="text-luck-grey">QA Analyst</option>
                <option className="text-luck-grey">Business Analyst</option>
              </select>
            </div>
            <button
              type="submit"
              value="Request"
              disabled={formInValid}
              className={`text-lucky-white ${
                formInValid ? "bg-[#E9EBEF]" : "bg-lucky-blue"
              } md:px-[8.966rem] md:py-[1rem] rounded-2xl font-bold font-poppins text-[1rem] md:text-[1.846rem] cursor-pointer`}
            >
              Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
