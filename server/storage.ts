import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export const storage = {
  users: new Map<string, User>(),
  products: new Map<string, Product>(),

  async getUser(id: string) {
    return this.users.get(id);
  },

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find((u) => u.username === username);
  },

  async createUser(user: InsertUser) {
    const id = randomUUID();
    const newUser = { ...user, id } as User;
    this.users.set(id, newUser);
    return newUser;
  },

  async getProducts() {
    return Array.from(this.products.values());
  },

  async getProduct(id: string) {
    return this.products.get(id);
  },

  async createProduct(product: InsertProduct) {
    const id = randomUUID();
    const newProduct = {
      ...product,
      id,
      createdAt: new Date().toISOString(),
    } as Product;
    this.products.set(id, newProduct);
    return newProduct;
  },

  async deleteProduct(id: string) {
    return this.products.delete(id);
  }
};
