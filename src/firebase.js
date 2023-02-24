//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTetMrtokTuATU95SX3t8kh1gbxQA_ywM",
  type: "service_account",
  projectId: "kenny-15239",
  private_key_id: "72c94749a727a717fbe4354fe63c8db32d83cf86",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDI5giMPCDoqVN5\n3VmMyWfq1QuCWpYJgJ0G0vfleJ4XKVV2LL5BhwVZzpczH1I92csgtBAypZCzbuRE\n9BE82sqLPym/2Lx+l8nVeK4mwTQwR/PYVp64CncrNczA/THXDKMqdqo82pxtRxnw\nB9p+fe50e5Niz2UgUpqjvZVZaiPXG6lMYcfIyFecJ8o9fcu09hma4dDw8Stx3UoJ\n4zEnqzKZdASqgAegHLgc7Nb2H7y7xxm0gMA3ynroYPLp1s702AOzcvdPW06mvz1I\nHKpkv3cShPxho7yqz1z4MWpw8PU8epEIfO8qZlHdOZpFDZ3NQIq4Wn0XWEJhGkcS\nSzTJqpTvAgMBAAECggEACQ/6EhFi+VEswdI5XZTMSkHtW1D+Hv7ylmyNNYhuYTnC\ncCqZM9gvu/BfeQqQVC1Em3y5P6pLpRHQhvJs604sqta2PxWQ0zPCWA3clUT2jLhX\niJ/Hrcz9uTDxGUI9WFJqndoX2II9YjSTN/UIEdgDxLS6Xk+1Y8g2JO1takjTxbqW\nOqTvUSE3ZPRZGMa3NX2KZrLBZJD5qs/fqaaYASsQhO0j0rVE50Gff6Ks2EBva1jY\nViKxgYgkgflR+l2gnoDnU/99JhRqcajQobxicGUmpdtqV8zLsC68zdX+ekg0u1ro\nFDyoJeNMI7oJeudDgqvGnmJnYueCsK1QF18D7HTGUQKBgQDs7oP+lQNpNMrkzyLD\nDw1wLG3KfWuLI+bf5dsfW6ezD6oCIQHR5rs7kM7tHICBIH7p5uFmwBRAgQT77pt4\nLt4Y0Cso8nXtXNlw/o55pNyo378PVulT1GmXfK0x5Hc1ndOySG8cSv1Wrg8ZpXxs\nkpyBQHx0hvJf0XyRacoeo3vF9wKBgQDZESFNtsSvD2CHWcM1FOozeFcYUca5dsm4\nUX/5VyKOAAxGnOkv0bJqSFPoCbcLtdCDQJ3LAFu79364zi3ydSOVbaTwfUMWO/Zm\nFn4ZA1lgoK8bCI0i7eoHtLb3b2hQJ2LFE8FbYkW8MxrtMCwLOFXu5iDJySeZ+qyu\neCz6fCOKyQKBgCTXxiC9bUVb1z0TVLV+TrmlvwDg1etSDuG8LYHHz+ERS39/QHgy\nZ+UQVI0chIMP2YxnwZ8nuT56kZrXdMeQiirTnBKG+X2KlalzfBZAY6vC90PcYPYP\nLshGs+vxOfRVcYjkqJp+srxa3rA/QoTjm4Ch1XiNT31E5xj5mVuAUovrAoGAeHw6\nqSFO0QDPCrH3WYpvaPxeE6Colp9p3oZWa3dDNeCu767+/E0AJGBbOovR740O3RvL\nujdLs+zviPLgrBj7FGFU0SwmRbwoy4emnImwXaMzLuUzOfUnFvnnKTbMhtklyNBr\nXicRICKZypgXim7NvBo+juK5uY1btkf8Z1jqfYkCgYBoA7Wytq8rPCRH/690LMQl\ni4MS+11OMOjFrBiP6V05/doJHIz5uNnfv0xNU8RGfAVJg0nJlFgosCaer8x6g17U\n6TwpOGaj3FQCzSCXPzQqpsSUdg2E4pOKb9QUmooZsIQP7gikKIXa3Ti8jLMwTPck\nw9KRxr8T6X1qjgF/vOKwcg==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-zokmm@kenny-15239.iam.gserviceaccount.com",
  client_id: "100448763885929551551",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zokmm%40kenny-15239.iam.gserviceaccount.com",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const database = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { database };
