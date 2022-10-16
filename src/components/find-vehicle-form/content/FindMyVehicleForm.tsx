import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Col, CustomSelect, Divider, Input, Row } from '../../common';
import RadioBtn from '../../common/radio-btn/RadioBtn';
import { Space } from '../../common/space';
import {
  ErrorField,
  FormContainer,
} from '../../VDP/schedul-test-drive/scheduleTestDriveForm.styles';
import { FindMyVehicleFormContainer } from '../styles/findMyVehicle.styles';
import { range } from '../../../global/utils/utils';
import { useSessionStorage } from 'usehooks-ts';

const FindMyVehicleForm = () => {
  const { register, handleSubmit, reset, formState, control } = useForm({
    mode: 'all',
  });
  const [formData, setFormData] = useSessionStorage<any>('formData', {});

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const { errors, isSubmitSuccessful, isValid } = formState;
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const getYears = range(1999, new Date().getFullYear())
    .map((year) => {
      return { label: year, value: year };
    })
    .reverse();

  const getPrices = range(5000, 200000, 5000)
    .map((price) => {
      return { label: `$${price}`, value: `${price}` };
    })
    .concat({ label: 'Any', value: 'any' })
    .reverse();

  const getMileages = range(5000, 150000, 5000)
    .map((mileage) => {
      return { label: `${mileage}`, value: `${mileage}` };
    })
    .concat({ label: 'Any', value: 'any' });

  const onSubmit = (data: any) => {
    const refactoredPhone = data.phoneNumber.split('-').join('');

    data['phoneNumber'] = refactoredPhone;

    const getFormData = {
      isFormValid: isValid,
      key: 'findVehicleForm',
      formData: { ...data },
    };

    setFormData(getFormData);
    setIsFormValid(true);
  };
  return (
    <div>
      <Divider style={{ fontSize: 20 }}>Personal Information</Divider>
      <FormContainer
        isFormSubmitted={
          formData?.key === 'findVehicleForm' && formData.isFormValid
        }
      >
        <form id="findVehicleForm" onSubmit={handleSubmit(onSubmit)}>
          <FindMyVehicleFormContainer>
            <Row style={{ rowGap: 20 }}>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  type="text"
                  label="First Name"
                  name="fName"
                  style={{ background: '#fff' }}
                  color="#000"
                  isInvalid={errors.fName}
                  scale="sm"
                  rules={{
                    required: true,
                  }}
                />
                {errors.fName?.type === 'required' && (
                  <ErrorField>First Name is required</ErrorField>
                )}
              </Col>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  name="lName"
                  type="text"
                  label="Last Name"
                  style={{ background: '#fff' }}
                  color="#000"
                  scale="sm"
                  isInvalid={errors.lName}
                  rules={{ required: true }}
                />
                {errors.lName?.type === 'required' && (
                  <ErrorField>Last Name is required</ErrorField>
                )}
              </Col>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  type="tel"
                  label="Mobile number"
                  name="phoneNumber"
                  placeholder="233-232-3243"
                  style={{ background: '#fff' }}
                  color="#000"
                  scale="sm"
                  value={phoneNumber}
                  rules={{
                    required: true,
                  }}
                  isInvalid={errors.phoneNumber}
                  onChange={(e: any) => {
                    if (e.target.value.length <= 12) {
                      var cleaned = ('' + e.target.value).replace(/\D/g, '');
                      let normValue = `${cleaned.substring(0, 3)}${
                        cleaned.length > 3 ? '-' : ''
                      }${cleaned.substring(3, 6)}${
                        cleaned.length > 6 ? '-' : ''
                      }${cleaned.substring(6, 11)}`;
                      setPhoneNumber(normValue);
                    }
                  }}
                />

                {errors.phoneNumber?.type === 'required' && (
                  <ErrorField>Phone number is required</ErrorField>
                )}
              </Col>

              <Col xs={12} md={6}>
                <Input
                  register={register}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="email@gmail.com"
                  style={{ background: '#fff' }}
                  color="#000"
                  scale="sm"
                  isInvalid={errors.email}
                  rules={{ required: true }}
                />
                {errors.email?.type === 'required' && (
                  <ErrorField>Email is required</ErrorField>
                )}
              </Col>
              <Col span={12}>
                <label
                  aria-required="true"
                  style={{ display: 'block', paddingBottom: 5 }}
                >
                  Preferred Method of Contact
                </label>
                <Space>
                  <div style={{ width: '40%' }}>
                    <RadioBtn
                      register={register}
                      size="lg"
                      label="Mobile"
                      name="methode"
                      id="methode1"
                      value="mobile"
                      rules={{ required: true }}
                    />
                  </div>
                  <RadioBtn
                    size="lg"
                    register={register}
                    label="Email"
                    name="methode"
                    id="methode2"
                    value="email"
                    rules={{ required: true }}
                  />
                </Space>
              </Col>
            </Row>
          </FindMyVehicleFormContainer>
          <Divider style={{ fontSize: 20 }}>What Are You Looking For ?</Divider>
          <FindMyVehicleFormContainer>
            <Row style={{ rowGap: 20 }}>
              <Col xs={12} md={6}>
                <label
                  aria-required="true"
                  style={{ display: 'block', paddingBottom: 5 }}
                >
                  Type
                </label>
                <Space>
                  <div style={{ width: '40%' }}>
                    <RadioBtn
                      register={register}
                      size="lg"
                      label="New"
                      name="type"
                      id="typeNew"
                      value="new"
                      rules={{ required: true }}
                    />
                  </div>
                  <RadioBtn
                    size="lg"
                    register={register}
                    label="Used"
                    name="type"
                    id="typeUsed"
                    value="used"
                    rules={{ required: true }}
                  />
                </Space>
              </Col>
              <Col xs={12} md={6}>
                <Controller
                  control={control}
                  name="year"
                  render={({ field: { onChange, value, ref } }) => (
                    <CustomSelect
                      inputRef={ref}
                      value={getYears.find((c) => c.value === value)}
                      onChange={(val: { value: string; label: string }) =>
                        onChange(val.value)
                      }
                      options={getYears}
                      label="Year"
                      isSearchable={false}
                    />
                  )}
                />
              </Col>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  type="text"
                  label="Make"
                  name="make"
                  style={{ background: '#fff' }}
                  color="#000"
                  isInvalid={errors.make}
                  scale="sm"
                  rules={{
                    required: true,
                  }}
                />
                {errors.make?.type === 'required' && (
                  <ErrorField>Make is required</ErrorField>
                )}
              </Col>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  type="text"
                  label="Model"
                  name="model"
                  style={{ background: '#fff' }}
                  color="#000"
                  isInvalid={errors.model}
                  scale="sm"
                  rules={{
                    required: true,
                  }}
                />
                {errors.model?.type === 'required' && (
                  <ErrorField>Model is required</ErrorField>
                )}
              </Col>
              <Col xs={12} md={6}>
                <Controller
                  control={control}
                  name="mileage"
                  render={({ field: { onChange, value, ref } }) => (
                    <CustomSelect
                      inputRef={ref}
                      label="Mileage (Max)"
                      value={getMileages.find((c) => c.value === value)}
                      onChange={(val: { value: string; label: string }) =>
                        onChange(val.value)
                      }
                      options={getMileages}
                      isSearchable={false}
                    />
                  )}
                />
              </Col>
              <Col xs={12} md={6}>
                <Controller
                  control={control}
                  name="price"
                  render={({ field: { onChange, value, ref } }) => (
                    <CustomSelect
                      inputRef={ref}
                      value={getPrices.find((c) => c.value === value)}
                      onChange={(val: { value: string; label: string }) =>
                        onChange(val.value)
                      }
                      options={getPrices}
                      label="Price (Max)"
                      isSearchable={false}
                    />
                  )}
                />
              </Col>
              <Col xs={12} md={6}>
                <Input
                  register={register}
                  type="text"
                  label="Trim"
                  name="trim"
                  style={{ background: '#fff' }}
                  color="#000"
                  isInvalid={errors.trim}
                  scale="sm"
                  rules={{
                    required: true,
                  }}
                />
                {errors.trim?.type === 'required' && (
                  <ErrorField>Trim is required</ErrorField>
                )}
              </Col>
              <Col xs={12} md={6}>
                <label
                  aria-required="true"
                  style={{ paddingBottom: 5, display: 'block' }}
                >
                  Transmission
                </label>
                <Space>
                  <RadioBtn
                    register={register}
                    size="lg"
                    label="Automatic"
                    name="transmission"
                    id="transAuto"
                    value="automatic"
                    rules={{ required: true }}
                  />

                  <RadioBtn
                    size="lg"
                    register={register}
                    label="Manual"
                    name="transmission"
                    id="transManual"
                    value="manual"
                    rules={{ required: true }}
                  />
                </Space>
              </Col>
            </Row>
          </FindMyVehicleFormContainer>
          <Button disabled={!isValid} block>
            Submit
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default FindMyVehicleForm;
