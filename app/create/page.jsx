'use client';

// components
import FormTypesToolbar from '../../components/form-types/FormTypesToolbar';
import FormTypes from '../../components/form-types/FormTypes';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';

// redux
import { sendFormData } from '../../redux/actions/formActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../redux/features/formSlice';
import { useLocalStorage } from '../../utils/localStorage';

// firebase auth
import useFirebaseAuthState from '../../utils/useFirebaseAuthState';
import { auth } from '../../firebase.config';

// code
function CreatePage() {
  const { getItem, setItem } = useLocalStorage();
  const dispatch = useDispatch();
  const user = useFirebaseAuthState();

  // component 요소 예시: { formType: 'multipleChoiceType', id: 0, title: '~~', options: [ {text: '~~'}, { text: '~~'} ] }
  const components = useSelector(state => state.form.components);
  const header = useSelector(state => state.form.header);
  let dataId = getItem('dataId') || 'localData0';

  const addFormTypeHandler = formType => {
    dispatch(formActions.addComponent(formType));
  };

  const removeFormTypeHandler = idx => {
    dispatch(formActions.removeComponent(idx));
  };

  const saveFormHandler = () => {
    const isCreatePage = true; // sendFormData에서 폼 생성시에만 validateForm함수를 실행

    const data = {
      creationDate: new Date().toISOString(),
      header: header,
      items: components,
    };

    user && (data.userId = auth.currentUser.uid);
    !user && (data.id = dataId);

    dispatch(sendFormData(user, data, isCreatePage));
  };

  return (
    <Section>
      <FormTypesToolbar onAddFormType={addFormTypeHandler} />
      <FormTypes items={components} onRemoveFormType={removeFormTypeHandler} />
      <Button
        className="centered"
        primary="highlight"
        onClick={saveFormHandler}
      >
        저장
      </Button>
    </Section>
  );
}

export default CreatePage;
