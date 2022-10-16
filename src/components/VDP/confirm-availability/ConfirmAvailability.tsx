import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Input, Row } from '../../common';
import RadioBtn from '../../common/radio-btn/RadioBtn';

import { useSessionStorage } from 'usehooks-ts';
import { useParams } from 'react-router-dom';
import {
  ErrorField,
  FormContainer,
} from '../schedul-test-drive/scheduleTestDriveForm.styles';

const ConfirmAvailability = () => {
  const params = useParams();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const isValidEmail = (email: any) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const formRef: any = useRef();
  const [formData, setFormData] = useSessionStorage<any>('formData', {});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailValidation = (email: any) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'all',
  });

  const { errors, isValid } = formState;

  const handlePhone = (e: any) => {
    setPhoneNumber(e);
  };

  const onSubmit = (data: any) => {
    const refactoredPhone = data.phoneNumber.split('-').join('');

    data['phoneNumber'] = refactoredPhone;

    const getFormData = {
      vehicleId: params.id,
      isFormValid: formState.isValid,
      key: 'confirmFormAvailability',
      formData: data,
    };

    setFormData(getFormData);
    setIsFormValid(true);
  };

  return (
    <FormContainer
      isFormSubmitted={
        formData?.key === 'confirmFormAvailability' && formData.isFormValid
      }
    >
      <form
        ref={formRef}
        id="confirmFormAvailability"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row style={{ rowGap: 20, marginBottom: 25 }}>
          <Col span={12}>
            <Input
              label="Full name"
              register={register}
              name="fullName"
              placeholder="Chris Joans"
              style={{ background: '#fff' }}
              color="#000"
              scale="xs"
              rules={{
                required: true,
                minLength: 6,
              }}
            />
            {errors.fullName?.type === 'required' && (
              <ErrorField>First name is required</ErrorField>
            )}
            {errors.fullName?.type === 'minLength' && (
              <ErrorField>
                Please enter your first name and last name
              </ErrorField>
            )}
          </Col>
        </Row>
        <label>Preferred Method</label>
        <Row style={{ rowGap: 20 }}>
          <Col span={6}>
            <RadioBtn
              register={register}
              label="Mobile"
              name="methode"
              id="methode1"
              value="mobile"
              rules={{ required: true }}
            />
          </Col>
          <Col span={6}>
            <RadioBtn
              register={register}
              label="Email"
              name="methode"
              id="methode2"
              value="email"
              rules={{ required: true }}
            />
          </Col>
          {errors.methode?.type === 'required' && (
            <ErrorField>Please choose one of the methodes</ErrorField>
          )}
          <Col span={12}>
            <label>Mobile number</label>
            <Input
              register={register}
              type="tel"
              name="phoneNumber"
              placeholder="2323-23232-323"
              style={{ background: '#fff' }}
              color="#000"
              scale="xs"
              value={phoneNumber}
              rules={{
                required: true,
              }}
              onChange={(e: any) => {
                if (e.target.value.length <= 12) {
                  var cleaned = ('' + e.target.value).replace(/\D/g, '');

                  let normValue = `${cleaned.substring(0, 3)}${
                    cleaned.length > 3 ? '-' : ''
                  }${cleaned.substring(3, 6)}${
                    cleaned.length > 6 ? '-' : ''
                  }${cleaned.substring(6, 11)}`;
                  handlePhone(normValue);
                }
              }}
            />
            {errors.phoneNumber?.type === 'required' && (
              <ErrorField>Phone number is required</ErrorField>
            )}
          </Col>
          <Col span={12}>
            <label>Email</label>
            <Input
              register={register}
              name="email"
              type="email"
              placeholder="email@gmail.com"
              style={{ background: '#fff' }}
              color="#000"
              scale="xs"
              rules={{ required: true, validate: handleEmailValidation }}
            />
            {errors.email?.type === 'required' && (
              <ErrorField>Email is required</ErrorField>
            )}
          </Col>
        </Row>

        <br />
        <Button disabled={!isValid} block>
          Reserve
        </Button>
      </form>
      <br />
    </FormContainer>
  );
};

export default ConfirmAvailability;
