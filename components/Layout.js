import Nav from './navigation/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
