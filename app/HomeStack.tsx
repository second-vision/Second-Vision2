import { Home } from "@/src/screens";

// Request BLE permissions on the first time it opens

export default function HomeStack() {
  // Defina qual tela você deseja renderizar aqui (pode ser baseada em uma condição, por exemplo, se o Bluetooth está ligado ou não)
  return <Home />;
}
