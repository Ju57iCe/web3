import { useState, useEffect } from "react"
import useSWR from "swr"

const adminAdresses = {
  "0x339bdac0ae9e5e35aace9f5c6f7b43b124a29ab7366e6eb669a8d2c840983646": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 != null ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )

  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
      accounts => mutate(accounts[0] ?? null))
  }, [provider])

  return {
    account: {
      data,
      isAdmin: (
        data &&
        adminAdresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest
    }
  }
}