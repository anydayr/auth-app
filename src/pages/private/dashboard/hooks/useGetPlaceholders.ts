import { useEffect, useState } from 'react';
import { GET_LIST_PLACEHOLDERS } from '../services/get-placeholders';
import { formatList } from '../adapters/list-placeholder';

const useGetPlaceholders = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getPlaceholder = async () => {
    setLoading(true);
    try {
      const result = await GET_LIST_PLACEHOLDERS();
      setResponse(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to create placeholder');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlaceholder();
  }, []);
  return {
    response: response ? formatList(response) : [],
    error,
    loading,
    getPlaceholder
  };
};

export default useGetPlaceholders;
