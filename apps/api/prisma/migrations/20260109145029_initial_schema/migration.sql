-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL,
    "session_id" VARCHAR(64) NOT NULL,
    "ip_address" INET NOT NULL,
    "user_agent" TEXT,
    "referrer" TEXT,
    "utm_source" VARCHAR(100),
    "utm_medium" VARCHAR(100),
    "utm_campaign" VARCHAR(100),
    "utm_content" VARCHAR(100),
    "utm_term" VARCHAR(100),
    "landing_page" VARCHAR(255) NOT NULL,
    "ab_variant_id" UUID,
    "device_type" VARCHAR(20),
    "browser" VARCHAR(50),
    "os" VARCHAR(50),
    "country" VARCHAR(2),
    "city" VARCHAR(100),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_activity_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "converted" BOOLEAN NOT NULL DEFAULT false,
    "conversion_at" TIMESTAMPTZ,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" BIGSERIAL NOT NULL,
    "session_id" UUID NOT NULL,
    "event_type" VARCHAR(50) NOT NULL,
    "event_name" VARCHAR(100),
    "event_data" JSONB,
    "element_id" VARCHAR(100),
    "element_text" TEXT,
    "page_path" VARCHAR(255) NOT NULL,
    "timestamp" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversions" (
    "id" BIGSERIAL NOT NULL,
    "session_id" UUID NOT NULL,
    "event_id" BIGINT NOT NULL,
    "conversion_type" VARCHAR(50) NOT NULL DEFAULT 'whatsapp_click',
    "page_path" VARCHAR(255) NOT NULL,
    "service_interest" VARCHAR(100),
    "timestamp" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "conversions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ab_tests" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "page_path" VARCHAR(255) NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'draft',
    "traffic_allocation" DECIMAL(3,2) NOT NULL DEFAULT 1.00,
    "start_date" TIMESTAMPTZ,
    "end_date" TIMESTAMPTZ,
    "winner_variant_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ab_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ab_variants" (
    "id" UUID NOT NULL,
    "ab_test_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_control" BOOLEAN NOT NULL DEFAULT false,
    "traffic_weight" DECIMAL(3,2) NOT NULL DEFAULT 0.50,
    "config" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ab_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ab_results" (
    "id" UUID NOT NULL,
    "ab_test_id" UUID NOT NULL,
    "variant_id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "sessions_count" INTEGER NOT NULL DEFAULT 0,
    "conversions_count" INTEGER NOT NULL DEFAULT 0,
    "conversion_rate" DECIMAL(5,4),
    "avg_time_on_page" INTEGER,
    "avg_scroll_depth" DECIMAL(5,2),
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ab_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_content" (
    "id" UUID NOT NULL,
    "page_path" VARCHAR(255) NOT NULL,
    "content" JSONB NOT NULL,
    "seo_title" VARCHAR(255),
    "seo_description" TEXT,
    "seo_keywords" TEXT[],
    "og_image" VARCHAR(255),
    "published" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "page_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "short_description" TEXT,
    "price_from" DECIMAL(10,2),
    "price_to" DECIMAL(10,2),
    "price_display" VARCHAR(50),
    "show_price" BOOLEAN NOT NULL DEFAULT true,
    "duration_minutes" INTEGER,
    "image_url" VARCHAR(255),
    "benefits" TEXT[],
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100),
    "role" VARCHAR(20) NOT NULL DEFAULT 'admin',
    "last_login_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_id_key" ON "sessions"("session_id");

-- CreateIndex
CREATE INDEX "sessions_session_id_idx" ON "sessions"("session_id");

-- CreateIndex
CREATE INDEX "sessions_created_at_idx" ON "sessions"("created_at");

-- CreateIndex
CREATE INDEX "sessions_landing_page_idx" ON "sessions"("landing_page");

-- CreateIndex
CREATE INDEX "sessions_ab_variant_id_idx" ON "sessions"("ab_variant_id");

-- CreateIndex
CREATE INDEX "events_session_id_idx" ON "events"("session_id");

-- CreateIndex
CREATE INDEX "events_event_type_idx" ON "events"("event_type");

-- CreateIndex
CREATE INDEX "events_timestamp_idx" ON "events"("timestamp");

-- CreateIndex
CREATE INDEX "conversions_session_id_idx" ON "conversions"("session_id");

-- CreateIndex
CREATE INDEX "conversions_timestamp_idx" ON "conversions"("timestamp");

-- CreateIndex
CREATE INDEX "ab_tests_page_path_idx" ON "ab_tests"("page_path");

-- CreateIndex
CREATE INDEX "ab_tests_status_idx" ON "ab_tests"("status");

-- CreateIndex
CREATE INDEX "ab_variants_ab_test_id_idx" ON "ab_variants"("ab_test_id");

-- CreateIndex
CREATE INDEX "ab_results_ab_test_id_date_idx" ON "ab_results"("ab_test_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ab_results_ab_test_id_variant_id_date_key" ON "ab_results"("ab_test_id", "variant_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "page_content_page_path_key" ON "page_content"("page_path");

-- CreateIndex
CREATE INDEX "page_content_page_path_idx" ON "page_content"("page_path");

-- CreateIndex
CREATE UNIQUE INDEX "services_slug_key" ON "services"("slug");

-- CreateIndex
CREATE INDEX "services_category_idx" ON "services"("category");

-- CreateIndex
CREATE INDEX "services_slug_idx" ON "services"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE INDEX "admin_users_email_idx" ON "admin_users"("email");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_ab_variant_id_fkey" FOREIGN KEY ("ab_variant_id") REFERENCES "ab_variants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversions" ADD CONSTRAINT "conversions_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversions" ADD CONSTRAINT "conversions_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ab_variants" ADD CONSTRAINT "ab_variants_ab_test_id_fkey" FOREIGN KEY ("ab_test_id") REFERENCES "ab_tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ab_results" ADD CONSTRAINT "ab_results_ab_test_id_fkey" FOREIGN KEY ("ab_test_id") REFERENCES "ab_tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ab_results" ADD CONSTRAINT "ab_results_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "ab_variants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
