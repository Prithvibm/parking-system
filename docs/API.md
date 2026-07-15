# API Reference

> **Note:** The endpoints below are sample references for documentation purposes.

## Overview
This document provides a high-level reference for the Parking System backend APIs.

## Authentication

### Login
- **Method:** POST
- **Endpoint:** `/api/login`
- **Description:** Authenticates a user and returns an access token.

## Parking Slots

### Get Parking Slots
- **Method:** GET
- **Endpoint:** `/api/slots`
- **Description:** Returns the list of available parking slots.

## Bookings

### Create Booking
- **Method:** POST
- **Endpoint:** `/api/bookings`
- **Description:** Creates a new parking booking.

### Get Bookings
- **Method:** GET
- **Endpoint:** `/api/bookings`
- **Description:** Returns all booking records.

## System Status

### Health Check
- **Method:** GET
- **Endpoint:** `/api/status`
- **Description:** Returns the current status of the backend service.

## Modified Files
- docs/API.md