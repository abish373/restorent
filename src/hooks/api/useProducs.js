import { useQuery } from "react-query";
import { foodItems } from "../../service/api";

export default function useProducts(...configs) {
  return useQuery(["food products"], () => foodItems(...configs));
}
