import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  async fetchUser (endpoint) {
    console.log('endpoint', endpoint);
    // Token is required but not available
    console.log('token', this.$auth.getToken(this.name));
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
        console.log('no access token');
      return
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      console.log('user endpoint is not defined');
      return
    }

    // Try to fetch user
    const user = await this.$auth.requestWith(
      this.name,  
      endpoint,
      this.options.endpoints.user,
    )

    // console.log(user); 
    // Transform the user object
    const customUser = {
      ...user,
      fullName: user.principal.username,
      roles: ['user']
    }


    console.log(customUser); 

    // Set the custom user
    // The `customUser` object will be accessible through `this.$auth.user`
    // Like `this.$auth.user.fullName` or `this.$auth.user.roles`
    this.$auth.setUser(customUser)
  }
}