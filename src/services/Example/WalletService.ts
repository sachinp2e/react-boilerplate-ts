import { ApiClient } from "../api/api-client";
import { API_ENDPOINTS } from "../api/config";

export class WalletService {
  static async connectWallet(kalpwalletId: string) {
    const response = await ApiClient.post(API_ENDPOINTS.WALLET.CONNECT_WALLET, {
      kalpwalletId,
    });
    return response.data;
  }

  static async getWalletData(kalpwalletId: string) {
    const response = await ApiClient.post(API_ENDPOINTS.WALLET.WALLET_DATA, {
      kalpwalletId,
    });
    return response.data;
  }
}
