import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();
export default async function createTask({
  fork,
  dispatch,
  service,
  action,
  textLoading,
  textSuccess,
  textError
}) {
  toast({
    title: 'Loading',
    description: textLoading,
    status: 'loading',
    duration: 3000,
    isClosable: true
  });
  const response = fork(async api => {
    await api.delay(1000);
    return await service();
  });

  const result = await response.result;

  if (result.status === 'ok') {
    toast({
      title: 'Sucesso!',
      description: textSuccess,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    dispatch(action(result.value));
  }

  if (result.status === 'rejected') {
    console.error(result)
    toast({
      title: 'Erro',
      description: textError,
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  }

  return result;
}