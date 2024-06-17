import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.categories.$post>;
type RequestType = InferRequestType<typeof client.api.categories.$post>["json"];

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({ 
    mutationFn: async (json) => {
      const res = await client.api.categories.$post({ json });
      if (!res.ok) {
        throw new Error("Failed to create Category");
      }
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] }); // refetch categories
      toast.success("Category Created!");
    },
    onError: () => {
      toast.error("Failed to create Category!");
    },
  });
  return mutation;
};

export default useCreateCategory;