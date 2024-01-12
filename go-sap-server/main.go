package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	// Create new Fiber instance
	app := fiber.New()

	// serve Single Page application on "/web"
	// assume static file at dist folder
	app.Use(cors.New())
	app.Static("/", "www")

	app.Get("/*", func(ctx *fiber.Ctx) error {
		return ctx.SendFile("./www/index.html")
	})

	// Start server on http://localhost:3000
	log.Fatal(app.Listen(":3001"))
}
