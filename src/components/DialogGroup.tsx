import { useSelector } from 'react-redux';
import { BasicModal } from './Dialog';
import CreatePlaceholder from '../pages/private/dashboard/Create';
import EditPlaceholder from '../pages/private/dashboard/Edit';

const ModalGroup = () => {
  const modalType = useSelector((state) => state.modal);

  return (
    <>
      {modalType.content === 'create-placeholders' && (
        <BasicModal title={'Crear placeholder'} showActions={false}>
          <CreatePlaceholder />
        </BasicModal>
      )}
      {modalType.content === 'edit-placeholders' && (
        <BasicModal title={'Editar placeholder'} showActions={false}>
          <EditPlaceholder />
        </BasicModal>
      )}
    </>
  );
};

export default ModalGroup;
