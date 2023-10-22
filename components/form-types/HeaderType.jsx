'use client';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../redux/features/formSlice';

// components
import FormTypeCard from '../ui/FormTypeCard';
import { HeaderInputArea } from '../ui/InputArea';

// code
function HeaderType({ isEdit }) {
  const dispatch = useDispatch();
  const header = useSelector(state => state.form.header); // 기존에 저장된 헤더값 가져옴.
  const editHeader = useSelector(state => state.form.editHeader);

  const changeHeaderHandler = event => {
    const newValue = event.target.value;
    dispatch(
      formActions.changeHeader(
        isEdit ? { newValue, isEdit: true } : { newValue, isEdit: false }
      )
    );
  };

  return (
    <FormTypeCard>
      <HeaderInputArea
        value={isEdit ? editHeader : header}
        onChange={changeHeaderHandler}
        placeholder="폼 주제를 입력하세요"
      />
    </FormTypeCard>
  );
}

export default HeaderType;
