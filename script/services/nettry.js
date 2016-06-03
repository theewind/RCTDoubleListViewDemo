
const Infrastructure = require('@rn/infrastructure');
const {
    Account,
    DeviceInfo,
} = Infrastructure;

export default {
  async fetchFooter() {
    let [userID, token, uuid] = [];
    try {
      userID = await Account.getID();
      token = await Account.getToken();
    } catch (e) {
      // do nothing
    }
    try {
      uuid = await DeviceInfo.getUUID();
    } catch (e) {
      // do nothing
    }
    let url = 'http://api.mobile.meituan.com/group/v1';
    if (token && token.length > 0) {
      url = `${url}/user/${userID}/recommend/survey?token=${token}`;
    } else {
      url = `${url}/recommend/${uuid}/survey`;
    }
    const response = await fetch(url);
    return await response.json();
  },
};
