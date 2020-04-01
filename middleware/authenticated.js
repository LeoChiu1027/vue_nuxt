export default function ({ store, error }) {
  // store.dispatch('nuxtClientInit');
  console.log('store',store.state.authUser);
  if (!store.state.authUser) {
    //return store.$router.push('/audit/login');
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}