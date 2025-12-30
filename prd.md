# 📘 Product Requirements Document (PRD): Smart Ledger

| Attribute | Details |
| :--- | :--- |
| **Project Name** | Smart Ledger |
| **Version** | 1.0.0 (Draft) |
| **Status** | 🟡 In Review |
| **Owner** | Product Owner / Lead Dev |
| **Last Updated** | 2024-XX-XX |
| **Tech Stack** | Next.js, TanStack Table, Prisma, Supabase (Free Tier) |

---

## 1. Executive Summary (บทสรุปผู้บริหาร)
**Smart Ledger** คือโซลูชันบัญชีรูปแบบ Hybrid ที่ผสานความยืดหยุ่นของ **Excel Interface** เข้ากับความถูกต้องแม่นยำของ **Relational Database**

* **Problem:** ผู้ประกอบการเสียเวลาจัดการไฟล์ Excel ที่ข้อมูลไม่เชื่อมโยงกัน (Data Silos) ข้อมูลซ้ำซ้อน และทำรายงานสรุปยาก
* **Solution:** เว็บแอปพลิเคชันที่มอบประสบการณ์การใช้งานแบบ Spreadsheet (Data Grid) แต่ทำงานบนฐานข้อมูลมาตรฐาน ทำให้ข้อมูลถูกต้อง เชื่อมโยงกัน และสรุปผลได้ทันที
* **Key Value:** "ใช้ง่ายเหมือน Excel แต่เก่งเหมือน ERP" โดยไม่มีค่าใช้จ่ายด้าน Software License

---

## 2. Technical Architecture & Strategy 🛠️
เลือกใช้ **Modern Tech Stack** ที่มีประสิทธิภาพสูง ชุมชนนักพัฒนาแข็งแกร่ง และที่สำคัญคือ **100% Free / Open Source** สำหรับการเริ่มต้น

| Component | Technology Selected | License | Strategic Reasoning |
| :--- | :--- | :--- | :--- |
| **Frontend** | **Next.js 14+ (App Router)** | MIT | Full-stack framework ที่ดีที่สุดในตลาด รองรับ SSR/Server Actions |
| **Styling** | **Tailwind CSS + shadcn/ui** | MIT | สวยงาม ทันสมัย ปรับแต่งได้ง่าย และไม่ต้องเขียน CSS เองทั้งหมด |
| **Data Grid** | **TanStack Table v8** | MIT | Headless UI สำหรับตารางที่ซับซ้อน (Sort, Filter, Edit) ดีที่สุดในปัจจุบัน |
| **Database** | **PostgreSQL** (via Supabase) | Apache 2.0 | ฐานข้อมูลระดับ Enterprise ที่มี Free Tier ตลอดชีพ (500MB) |
| **ORM** | **Prisma** | Apache 2.0 | Type-safe DB Client ช่วยลดข้อผิดพลาดในการ Query ข้อมูล |
| **Validation** | **Zod** | MIT | ตรวจสอบความถูกต้องของข้อมูล (Schema Validation) ทั้งหน้าบ้านและหลังบ้าน |
| **Charts** | **Recharts** | MIT | Library กราฟที่ออกแบบมาเพื่อ React โดยเฉพาะ |

### 2.1 System Architecture
```mermaid
graph TD
    User[End User] -->|HTTPS| Client[Next.js App]
    
    subgraph "Frontend Layer"
        Client -->|Interactive Data| Grid[TanStack Table]
        Client -->|Visuals| Charts[Recharts]
        Client -->|Validation| Zod[Zod Schema]
    end
    
    Client -->|Server Actions / API| Server[Next.js Server Side]
    
    subgraph "Backend Layer"
        Server -->|ORM| Prisma[Prisma Client]
        Prisma -->|Query| DB[(PostgreSQL @ Supabase)]
    end