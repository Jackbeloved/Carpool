var util = require('utils/util.js');
App({

/*  onLaunch: function () {
    var that = this; 
      wx.checkSession({
        success: function(){  
          wx.getStorage({  
            key: 'sk',
            success: function(res) {
                var sk = res.data;
                util.req('user/vaild_sk', { "sk": sk }, function (data) {
                  if (data.status == 1) {
                    that.globalData.sk = sk;
                  } else {
                    that.login();
                    return;
                  }
                })
            },
            fail:function() {
              that.login();
               return;
            }
          })

          wx.getStorage({  
            key: 'userInfo',
            success: function(res) {
                that.globalData.userInfo = res.data;
            },
            fail:function() {
              that.login();
            }
          });
        },
        fail: function(){
          that.login() 
        }
      })
    
  },

  login:function(){
    var that = this;
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function(userinfo){
            util.req('user/login', {
              "code": res.code,
              "encryptedData": userinfo.encryptedData,
              "iv": userinfo.iv
               }, function (data) {
                 that.setUserInfo(data.user);
                 that.setSk(data.sk);
            })
          },
          fail: function(res) {
            that.loginFail();
          }
        })
      }
    })
  } ,
  */
  globalData:{
    userInfo:null,
    sk:null
  }
  
})