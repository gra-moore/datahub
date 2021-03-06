import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  // Removes the default root key
  root: false,

  // Since api's are not side-loaded, allow embed. Also, this is required when root is false
  embed: true
});
