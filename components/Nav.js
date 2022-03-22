import requests from "../utils/requests";

export default function Nav() {
  return (
    <nav>
      <div>{Object.entries(requests)}</div>
    </nav>
  );
}
