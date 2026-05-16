import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create demo tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: "demo-business" },
    update: {},
    create: {
      name: "Demo Business",
      slug: "demo-business",
      status: "ACTIVE",
      brandColor: "#25D366",
      businessEmail: "hello@demobusiness.com",
      businessPhone: "+919876543210",
      timezone: "Asia/Kolkata",
      currency: "INR",
      welcomeMessage: "Hi! 👋 Welcome to Demo Business. How can I help you today?",
      afterHoursMsg: "We're currently closed. We'll respond during business hours (Mon-Sat, 9AM–7PM).",
      businessHours: {
        mon: { open: "09:00", close: "19:00", isOpen: true },
        tue: { open: "09:00", close: "19:00", isOpen: true },
        wed: { open: "09:00", close: "19:00", isOpen: true },
        thu: { open: "09:00", close: "19:00", isOpen: true },
        fri: { open: "09:00", close: "19:00", isOpen: true },
        sat: { open: "10:00", close: "17:00", isOpen: true },
        sun: { open: "09:00", close: "17:00", isOpen: false },
      },
    },
  });
  console.log(`✅ Tenant: ${tenant.name} (${tenant.id})`);

  // Create admin user
  const hash = await bcrypt.hash("Admin@123", 10);
  const user = await prisma.user.upsert({
    where: { email: "admin@demobusiness.com" },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "admin@demobusiness.com",
      passwordHash: hash,
      firstName: "Admin",
      lastName: "Demo",
      role: "OWNER",
      isActive: true,
      isEmailVerified: true,
    },
  });
  console.log(`✅ User: ${user.email}`);

  // Create agent user
  const agentHash = await bcrypt.hash("Agent@123", 10);
  const agent = await prisma.user.upsert({
    where: { email: "agent@demobusiness.com" },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "agent@demobusiness.com",
      passwordHash: agentHash,
      firstName: "Ravi",
      lastName: "Kumar",
      role: "AGENT",
      isActive: true,
      isEmailVerified: true,
    },
  });
  console.log(`✅ Agent: ${agent.email}`);

  // Create FAQs
  const faqs = [
    { question: "What are your business hours?", answer: "We are open Monday to Saturday, 9 AM to 7 PM. Sunday we are closed.", keywords: ["hours", "timings", "open", "close"], category: "General" },
    { question: "How do I book an appointment?", answer: "Type 'book' or reply with '1' in this chat and I'll guide you through the booking process! 📅", keywords: ["book", "appointment", "schedule", "slot"], category: "Booking" },
    { question: "What is your return policy?", answer: "We offer 30-day hassle-free returns. Just bring your receipt and the item in original condition. 🔄", keywords: ["return", "refund", "exchange", "policy"], category: "Orders" },
    { question: "Do you offer home delivery?", answer: "Yes! We deliver within a 10 km radius. Delivery charge is ₹49 for orders under ₹500, FREE above ₹500. 🚚", keywords: ["delivery", "home", "deliver", "shipping"], category: "Delivery" },
    { question: "What payment methods do you accept?", answer: "We accept UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, and cash on delivery. 💳", keywords: ["payment", "pay", "upi", "card", "cash"], category: "Payment" },
    { question: "How do I track my order?", answer: "Once your order ships, you'll receive a WhatsApp message with the tracking link. You can also reply 'track' to check status. 📦", keywords: ["track", "order", "status", "where"], category: "Orders" },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.upsert({
      where: { id: `faq-${faq.question.slice(0, 10).replace(/\s/g, "-")}` },
      update: {},
      create: { id: `faq-${faq.question.slice(0, 10).replace(/\s/g, "-")}`, tenantId: tenant.id, ...faq, isActive: true, priority: 0, hitCount: Math.floor(Math.random() * 300) },
    }).catch(() => prisma.fAQ.create({ data: { tenantId: tenant.id, ...faq, isActive: true, priority: 0, hitCount: Math.floor(Math.random() * 300) } }));
  }
  console.log(`✅ FAQs: ${faqs.length} created`);

  // Create Catalog Items
  const items = [
    { name: "Classic Haircut", description: "Professional haircut by expert stylists", price: 299, category: "Services", sku: "SVC-001", status: "ACTIVE" },
    { name: "Beard Trim", description: "Shape and trim beard with precision", price: 149, category: "Services", sku: "SVC-002", status: "ACTIVE" },
    { name: "Hair Color (Full)", description: "Full head coloring with premium products", price: 1499, category: "Services", sku: "SVC-003", status: "ACTIVE" },
    { name: "Keratin Treatment", description: "Professional keratin smoothing treatment", price: 2999, category: "Services", sku: "SVC-004", status: "ACTIVE" },
    { name: "Shampoo + Conditioner Set", description: "Premium hair care combo pack", price: 599, category: "Products", sku: "PRD-001", status: "ACTIVE", stock: 24 },
    { name: "Hair Serum", description: "Anti-frizz and shine serum 100ml", price: 349, category: "Products", sku: "PRD-002", status: "ACTIVE", stock: 15 },
  ];
  for (const item of items) {
    await prisma.catalogItem.create({
      data: { tenantId: tenant.id, price: item.price, currency: "INR", tags: [], ...item as any },
    }).catch(() => {});
  }
  console.log(`✅ Catalog: ${items.length} items created`);

  // Create demo customers
  const customers = [
    { phone: "919876543210", name: "Priya Sharma", email: "priya@example.com" },
    { phone: "918765432109", name: "Rahul Kumar", email: "rahul@example.com" },
    { phone: "917654321098", name: "Anita Patel", email: "anita@example.com" },
  ];
  const createdCustomers = [];
  for (const c of customers) {
    const cust = await prisma.customer.upsert({
      where: { tenantId_phone: { tenantId: tenant.id, phone: c.phone } },
      update: {},
      create: { tenantId: tenant.id, ...c, tags: [] },
    });
    createdCustomers.push(cust);
  }
  console.log(`✅ Customers: ${customers.length} created`);

  // Create demo conversations + messages
  const conv = await prisma.conversation.create({
    data: {
      tenantId: tenant.id,
      customerId: createdCustomers[0].id,
      status: "OPEN",
      isAiActive: true,
      channel: "whatsapp",
      lastMessageAt: new Date(),
    },
  });
  await prisma.message.createMany({
    data: [
      { conversationId: conv.id, tenantId: tenant.id, direction: "INBOUND", type: "TEXT", status: "READ", content: "Hi! I'd like to book an appointment", isAiGenerated: false },
      { conversationId: conv.id, tenantId: tenant.id, direction: "OUTBOUND", type: "TEXT", status: "READ", content: "Hello Priya! 👋 I can help you book an appointment. What service are you looking for?\n\n1️⃣ Haircut – ₹299\n2️⃣ Beard Trim – ₹149\n3️⃣ Hair Color – ₹1,499", isAiGenerated: true },
      { conversationId: conv.id, tenantId: tenant.id, direction: "INBOUND", type: "TEXT", status: "READ", content: "Haircut please", isAiGenerated: false },
      { conversationId: conv.id, tenantId: tenant.id, direction: "OUTBOUND", type: "TEXT", status: "DELIVERED", content: "✅ Booked! Haircut at 3:30 PM today. See you soon! 🎉", isAiGenerated: true },
    ],
  });
  console.log(`✅ Conversations and messages created`);

  // Create automation flows
  const automations = [
    { name: "Welcome Message", description: "Greet new customers", trigger: "FIRST_MESSAGE", isActive: true, actions: [{ type: "send_message", payload: { text: "Welcome to Demo Business! 👋 How can I help you today?" } }], priority: 10, runCount: 1247 },
    { name: "After-Hours Reply", description: "Auto-reply outside business hours", trigger: "AFTER_HOURS", isActive: true, actions: [{ type: "send_message", payload: { text: "We're closed right now. Business hours: Mon-Sat 9AM–7PM. We'll reply soon!" } }], priority: 5, runCount: 438 },
    { name: "Booking Reminder", description: "Remind customers 1hr before appointment", trigger: "BOOKING_REMINDER", isActive: true, actions: [{ type: "send_template", payload: { template: "appointment_reminder" } }], priority: 8, runCount: 189 },
  ];
  for (const a of automations) {
    await prisma.automationFlow.create({ data: { tenantId: tenant.id, ...a as any } }).catch(() => {});
  }
  console.log(`✅ Automations: ${automations.length} created`);

  // Create subscription
  await prisma.subscription.upsert({
    where: { tenantId: tenant.id },
    update: {},
    create: {
      tenantId: tenant.id,
      planId: "growth",
      status: "ACTIVE",
      currentPeriodStart: new Date("2024-12-01"),
      currentPeriodEnd: new Date("2024-12-31"),
      monthlyMessages: 2500,
    },
  });
  console.log(`✅ Subscription: Growth plan`);

  console.log("\n🎉 Seeding complete!");
  console.log("\n📋 Test Credentials:");
  console.log("   Admin: admin@demobusiness.com / Admin@123");
  console.log("   Agent: agent@demobusiness.com / Agent@123");
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(() => prisma.$disconnect());
