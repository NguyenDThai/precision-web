import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const emailInvalid = touchedEmail && email.trim() === "";
  const passwordInvalid = touchedPassword && password.trim() === "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouchedEmail(true);
    setTouchedPassword(true);
    if (!isFormValid) return;
    console.log("Login submitted", { email, password });
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300 min-h-screen">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("login.title")}
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
            {t("login.subtitle")}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t("login.emailLabel")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouchedEmail(true)}
                className={`block w-full rounded-xl border ${emailInvalid ? "border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"} bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white sm:text-sm transition-colors`}
                placeholder={t("login.emailPlaceholder")}
              />
              {emailInvalid && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {t("login.emailRequired")}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t("login.passwordLabel")}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouchedPassword(true)}
                  className={`block w-full rounded-xl border ${passwordInvalid ? "border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"} bg-white dark:bg-gray-900 px-4 py-3 pr-10 text-gray-900 dark:text-white sm:text-sm transition-colors`}
                  placeholder={t("login.passwordPlaceholder")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
              {passwordInvalid && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {t("login.passwordRequired")}
                </p>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex w-full justify-center rounded-xl bg-blue-600 px-4 py-4 text-sm font-bold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-600/20 active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {t("login.submitBtn")}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {t("login.noAccount")}{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            {t("login.register")}
          </button>
        </p>
      </div>
    </main>
  );
}
