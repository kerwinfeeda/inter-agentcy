import React, { useEffect } from "react";
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

const CreatePlayerModal = ({ onClose, isEdit }) => {
  const [form] = useForm();

  const { refetch } = useContextHook(AuthContext, (v) => ({
    refetch: v.refetch,
  }));

  // useEffect(() => {
  //   if (isEdit) {
  //     form.setFieldsValue({
  //       name: isEdit?.name,
  //       email: isEdit?.email,
  //       description: isEdit?.slogan,
  //       address: isEdit?.location?.address,
  //       country: countries?.find(
  //         (elem) => elem?.value === isEdit?.location?.country,
  //       ),
  //       value: isEdit?.realValue,
  //       foundationYear: isEdit?.foundationYear,
  //       instagram: isEdit?.socialLinks?.instagram,
  //       twitter: isEdit?.socialLinks?.twitter,
  //       linkedIn: isEdit?.socialLinks?.linkedin,
  //       about: isEdit?.description,
  //       notableDeals: isEdit?.notableDeals,
  //       services: services?.filter((elem) =>
  //         isEdit?.services?.includes(elem?.value),
  //       ),
  //     });
  //   }
  // }, [isEdit]);

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
        Toast({ type: "success", message: "Player Updated Successfully!" });
        onClose();
        refetch();
      } else {
        await agencyService?.addAgency(payload);
        Toast({ type: "success", message: "Player Added Successfully!" });
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
          name="firstName"
          label="Player First Name"
          placeholder="Enter Player First Name"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          name="lastName"
          label="Player Last Name"
          placeholder="Enter Player Last Name"
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="nicName"
          label="Player Nic Name"
          placeholder="Enter Player Nic Name"
        >
          <Field />
        </Form.Item>
        <Form.Item
          name="email"
          label="Player Email"
          placeholder="Enter Player Email"
          rules={[{ required: true }, { email: true }]}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="text"
          name="birthPlace"
          label="Player Birth Place"
          placeholder="Enter Player Birth Place"
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="date"
          name="birthDate"
          label="Player Birth Date"
          placeholder="Enter Player Birth Date"
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="number"
          name="height"
          label="Player Height"
          placeholder="Enter Player Height (in feet's)"
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="number"
          name="weight"
          label="Player Weight"
          placeholder="Enter Player Weight (in kilograms)"
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="number"
          name="age"
          label="Player Age"
          placeholder="Enter Player Age"
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="number"
          name="realValue"
          label="Player Value"
          placeholder="Enter Player Value"
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="select"
          name="preferredFoot"
          label="Player Preferred Foot"
          placeholder="Enter Player Preferred Foot"
          options={[
            {
              label: "Left",
              value: "left",
            },
            {
              label: "Right",
              value: "right",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="select"
          name="role"
          label="Player Role"
          placeholder="Enter Player Role"
          options={[
            {
              label: "GOALKEEPER",
              value: "GOALKEEPER",
            },
            {
              label: "DEFENDER",
              value: "DEFENDER",
            },
            {
              label: "MIDFIELDER",
              value: "MIDFIELDER",
            },
            {
              label: "FORWARD",
              value: "FORWARD",
            },
          ]}
          rules={[{ required: true }]}
        >
          <Field />
        </Form.Item>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          type="select"
          name="status"
          label="Player Status"
          placeholder="Enter Player Status"
          options={[
            {
              label: "ACTIVE",
              value: "ACTIVE",
            },
            {
              label: "PROSPECT",
              value: "PROSPECT",
            },
            {
              label: "RETIRED",
              value: "RETIRED",
            },
            {
              label: "INJURED",
              value: "INJURED",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="select"
          name="country"
          label="Player Country"
          placeholder="Enter Player Country"
          options={countries}
        >
          <Field />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <Button type="button" onClick={onClose} variant="white">
          Cancel
        </Button>
        <Button>{isEdit ? "Update Player" : "Add Player"}</Button>
      </div>
    </Form>
  );
};

export default CreatePlayerModal;
