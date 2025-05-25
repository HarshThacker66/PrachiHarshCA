import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const data = insertContactSubmissionSchema.parse(req.body);
      
      // Add timestamp
      const submission = {
        ...data,
        createdAt: new Date().toISOString()
      };
      
      // Store the contact submission
      const result = await storage.createContactSubmission(submission);
      
      res.status(201).json({
        message: "Your message has been submitted successfully!",
        id: result.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An error occurred while submitting your message." });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while retrieving contact submissions." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
