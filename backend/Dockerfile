# Use an official Python runtime as the base image
FROM python:3.11.5-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Make .venv
RUN python -m venv .venv

# Activate venv
RUN source .venv/bin/activate

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Run app.py from waitress serve
CMD [waitress-serve, --port=8000, --host 0.0.0.0, app:app]