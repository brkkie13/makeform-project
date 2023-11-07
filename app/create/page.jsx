'use client';
import styled from 'styled-components';

// components
import Notification from '../../components/ui/Notification';
import FormTypesToolbar from '../../components/form-types/FormTypesToolbar';
import FormTypes from '../../components/form-types/FormTypes';
import Button from '../../components/ui/Button';

// redux
import { sendFormData } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../redux/features/formSlice';

// css
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// code
function CreatePage() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  // component 예시: { formType: 'multipleChoiceType', id: 0, title: '~~', options: [ {text: '~~'}, { text: '~~'} ] }
  // components: component 객체가 모인 배열
  const components = useSelector(state => state.form.components);
  const header = useSelector(state => state.form.header);

  const addFormTypeHandler = formType => {
    dispatch(formActions.addComponent(formType));
  };

  const removeFormTypeHandler = idx => {
    dispatch(formActions.removeComponent(idx));
  };

  const saveFormHandler = () => {
    const data = {
      creationDate: new Date().toISOString(),
      header: header,
      items: components,
    };
    dispatch(sendFormData(data));
  };

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <Section>
        <FormTypesToolbar onAddFormType={addFormTypeHandler} />
        <FormTypes
          components={components}
          onRemoveFormType={removeFormTypeHandler}
        />
        <Button primary="highlight" onClick={saveFormHandler}>
          저장
        </Button>
      </Section>
    </>
  );
}

export default CreatePage;
