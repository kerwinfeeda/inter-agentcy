import React, { useContext, useEffect } from "react";
import Form from "../../../../../components/Form/index";
import useForm from "../../../../../components/Form/useForm";
import Field from "../../../../../components/Field";
import Button from "../../../../../components/Button";
import Toast from "../../../../../components/Toast";
import { countries } from "../../../../../components/Constant";
import agencyService from "../../../../../services/agencyService";
import { AuthContext } from "../../../../../Context/authContext";
import { useContextHook } from "use-context-hook";

const services = [
  {
    label: "Contract and salary negotiation",
    value: "Contract and salary negotiation",
  },
  {
    label: "domestic and international transfers and loans",
    value: "domestic and international transfers and loans",
  },
  {
    label: "image-rights structuring",
    value: "image-rights structuring",
  },
  {
    label: "sponsorship and brand partnerships",
    value: "sponsorship and brand partnerships",
  },
  {
    label: "PR, social media and content",
    value: "PR, social media and content",
  },
  {
    label: "legal and tax counsel",
    value: "legal and tax counsel",
  },
  {
    label: "relocation and family services",
    value: "relocation and family services",
  },
  {
    label: "performance science and analytics",
    value: "performance science and analytics",
  },
  {
    label: "injury and wellbeing management",
    value: "injury and wellbeing management",
  },
  {
    label: "post-career planning",
    value: "post-career planning",
  },
];

const CreateAgencyModal = ({ onClose, isEdit }) => {
  const [form] = useForm();

  const { refetch } = useContextHook(AuthContext, (v) => ({
    refetch: v.refetch,
  }));

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        name: isEdit?.name,
        email: isEdit?.email,
        description: isEdit?.slogan,
        address: isEdit?.location?.address,
        country: countries?.find(
          (elem) => elem?.value === isEdit?.location?.country,
        ),
        value: isEdit?.realValue,
        foundationYear: isEdit?.foundationYear,
        instagram: isEdit?.socialLinks?.instagram,
        twitter: isEdit?.socialLinks?.twitter,
        linkedIn: isEdit?.socialLinks?.linkedin,
        about: isEdit?.description,
        notableDeals: isEdit?.notableDeals,
        services: services?.filter((elem) =>
          isEdit?.services?.includes(elem?.value),
        ),
      });
    }
  }, [isEdit]);

  const handleSubmit = async (e) => {
    const payload = {
      name: e?.name,
      email: e?.email,
      slogan: e?.description,
      location: {
        country: e?.country?.value,
        address: e?.address,
      },
      realValue: e?.value,
      foundationYear: e?.foundationYear,
      socialLinks: {
        instagram: e?.instagram,
        twitter: e?.twitter,
        linkedIn: e?.linkedin,
      },
      description: e?.about,
      notableDeals: e?.notableDeals,
      services: e?.services?.map((item) => item?.value),
    };

    try {
      if (isEdit) {
        await agencyService?.updateAgency(isEdit?._id, payload);
        Toast({ type: "success", message: "Agency Updated Successfully!" });
        onClose();
        refetch();
      } else {
        await agencyService?.addAgency(payload);
        Toast({ type: "success", message: "Agency Added Successfully!" });
        onClose();
        refetch();
      }
    } catch (error) {
      Toast({
        type: "error",
        message: error?.message || "Something went wrong!",
      });
    }
  };
  return (
    <Form form={form} onSubmit={handleSubmit} className="md:space-y-5">
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="name"
          label="Agency Name"
          placeholder="Enter Agency Name"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          name="email"
          label="Agency Email"
          placeholder="Enter Agency Email"
          rules={[{ required: true }, { email: true }]}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="description"
          label="Agency Slogan"
          placeholder="Enter Agency Slogan"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          name="value"
          label="Agency Value"
          placeholder="Enter Agency Value"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="address"
          label="Agency Address"
          placeholder="Enter Agency Address"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="select"
          name="country"
          label="Agency Country"
          placeholder="Enter Agency Country"
          rules={[{ required: true }]}
          options={countries}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="foundationYear"
          label="Foundation Year"
          placeholder="Enter Foundation Year"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          name="instagram"
          label="Instagram"
          placeholder="Enter Instagram Link"
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="twitter"
          label="Twitter"
          placeholder="Enter Twitter Link"
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          name="linkedin"
          label="Linkedin"
          placeholder="Enter Linkedin Link"
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid gap-3">
        <Form.Item
          type="select"
          name="services"
          label="Services"
          placeholder="Select Services (Optional)"
          options={services}
          isMulti
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="textarea"
          name="about"
          label="About"
          placeholder="Enter About Description (Optional)"
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="textarea"
          name="notableDeals"
          label="Notable Deals"
          placeholder="Enter Notable Deals (Optional)"
        >
          <Field />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <Button type="button" onClick={onClose} variant="white">
          Cancel
        </Button>
        <Button>{isEdit ? "Update Agency" : "Add Agency"}</Button>
      </div>
    </Form>
  );
};

export default CreateAgencyModal;
