# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# receive build-time values
ARG NEXT_PUBLIC_WEBSITE_API
ARG NEXT_PUBLIC_WEBSITE_URL

ENV NEXT_PUBLIC_WEBSITE_API=$NEXT_PUBLIC_WEBSITE_API
ENV NEXT_PUBLIC_WEBSITE_URL=$NEXT_PUBLIC_WEBSITE_URL

COPY . .

# Build app (creates .next/)
RUN npm run build

# ⬇️ Make sure it's not being ignored by .dockerignore!

# Confirm the build exists
RUN ls -la .next

EXPOSE 4001

CMD ["npm", "start"]