import "mapbox-gl/dist/mapbox-gl.css";
import { UserProvider, useFetchUser } from "../utils/user.js";

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={(user, loading)}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
